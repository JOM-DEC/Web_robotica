document.addEventListener('DOMContentLoaded', event => {
    console.log("entro en la pagina")



    document.getElementById("delante").addEventListener("click", move)
    document.getElementById("derecha").addEventListener("click", derecha)
    document.getElementById("parar").addEventListener("click", parar)
    document.getElementById("izquierda").addEventListener("click", izquierda)

    canvasMap = document.getElementById("map");
    let robotPosition = {
        x: 0.0,
        y: 0.0
    }

    data = {
        // ros connection
        ros: null,
        rosbridge_address: 'ws://127.0.0.1:9090/',
        connected: false,
    }

    //--------------------------------------------------------------------------------------//
    //                                      Interuptor                                      //
    //--------------------------------------------------------------------------------------//

    test = document.getElementById("switch");
    boolTest = false
    test.addEventListener('change', function (e) {
        boolTest = !boolTest
        if (!boolTest) {
            console.log("off");
            disconnect();
        }
        if (boolTest) {
            console.log("on");
            connect();
        }
    });

    //--------------------------------------------------------------------------------------//
    //                                      Interuptor                                      //
    //--------------------------------------------------------------------------------------//

    function connect() {
        console.log("Clic en connect")
        mesas()

        data.ros = new ROSLIB.Ros({
            url: data.rosbridge_address
        })

        // Define callbacks
        data.ros.on("connection", () => {
            data.connected = true
            console.log("Conexion con ROSBridge correcta")
        })
        data.ros.on("error", (error) => {
            console.log("Se ha producido algun error mientras se intentaba realizar la conexion")
            console.log(error)
        })
        data.ros.on("close", () => {
            data.connected = false
            console.log("Conexion con ROSBridge cerrada")
        })

        //Subscribe to the map topic
        var mapTopic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/map',
            messageType: 'nav_msgs/msg/OccupancyGrid'
        });

        mapTopic.subscribe((message) => {
            data.mapa = message
            console.log("pepe");
            draw_occupancy_grid(canvasMap, message, robotPosition)

            //Actualiza el mapa cada 5 segundos
            //setInterval(function() {draw_occupancy_grid(canvasMap, message, robotPosition)}, 5000)
        });

        getPosition()
    }

    function disconnect() {
        data.ros.close()
        data.connected = false
        console.log('Clic en botón de desconexión')
        mesas()
    }

    function move() {
        console.log("alante!");

        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })
        let message = new ROSLIB.Message({
            linear: { x: 0.4, y: 0, z: 0, },
            angular: { x: 0, y: 0, z: 0, },
        })
        topic.publish(message)
    }

    function parar() {
        console.log("¡PARA!");

        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })
        let message = new ROSLIB.Message({
            linear: { x: 0, y: 0, z: 0, },
            angular: { x: 0, y: 0, z: 0, },
        })
        topic.publish(message)
    }

    function derecha() {
        console.log("¡DERECHA!");
        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })
        let message = new ROSLIB.Message({
            linear: { x: 0, y: 0, z: 0, },
            angular: { x: 0, y: 0, z: -0.2, },
        })
        topic.publish(message)
    }

    function izquierda() {
        console.log("¡IZQUIERDA!");
        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })
        let message = new ROSLIB.Message({
            linear: { x: 0, y: 0, z: 0, },
            angular: { x: 0, y: 0, z: 0.2, },
        })
        topic.publish(message)
    }

    function getPosition() {
        console.log("Posicion");
        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/odom',
            messageType: 'nav_msgs/msg/Odometry'
        })
        topic.subscribe((message) => {
            data.position = message.pose.pose.position
            document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
            document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)

            x0 = document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
            robotPosition.x = data.position.x.toFixed(2)
            y0 = document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
            robotPosition.y = data.position.y.toFixed(2)


            /*
            if (coor_flag == false) {
                x0 = document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
                y0 = document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
                coor_flag = true
            }
            */
        })
    }

    //Movimiento Mesas
    document.getElementById("m1").addEventListener("click", function () {
        goal(-3.35, -4.6)
    })

    document.getElementById("m2").addEventListener("click", function () {
        goal(-1.2, -4.6)
    })

    document.getElementById("m3").addEventListener("click", function () {
        goal(1.36, -4.6)
    })

    document.getElementById("m4").addEventListener("click", function () {
        goal(4.0, -4.6)
    })

    document.getElementById("m5").addEventListener("click", function () {
        goal(-3.65, -3.68)
    })

    document.getElementById("m6").addEventListener("click", function () {
        goal(-1.45, -3.68)
    })

    document.getElementById("m7").addEventListener("click", function () {
        goal(1.24, -3.68)
    })

    //Goal
    function goal(x, y) {
        console.log("Entra");

        my_pose = {
            header: {
                stamp: {
                    secs: 0,
                    nsecs: 100
                },
                frame_id: "map"
            },
            pose: {
                position: {
                    x: parseFloat(x),
                    y: parseFloat(y),
                    z: 0.0
                },
                orientation: {
                    w: 1.0
                }
            }
        }

        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/goal_pose',
            messageType: 'geometry_msgs/msg/PoseStamped'
        })

        let message = new ROSLIB.Message(my_pose)
        console.log("Publica el topic")
        topic.publish(message)
    }

    //Ocultar mesas
    mesas()
    function mesas() {
        var m1 = document.getElementById("m1");
        var m2 = document.getElementById("m2");
        var m3 = document.getElementById("m3");
        var m4 = document.getElementById("m4");
        var m5 = document.getElementById("m5");
        var m6 = document.getElementById("m6");
        var m7 = document.getElementById("m7");

        if (m1.style.display === "none" && m2.style.display === "none" && m3.style.display === "none" && m4.style.display === "none" && m5.style.display === "none" && m6.style.display === "none" && m7.style.display === "none") {
            m1.style.display = "block";
            m2.style.display = "block";
            m3.style.display = "block";
            m4.style.display = "block";
            m5.style.display = "block";
            m6.style.display = "block";
            m7.style.display = "block";
        } else {
            m1.style.display = "none";
            m2.style.display = "none";
            m3.style.display = "none";
            m4.style.display = "none";
            m5.style.display = "none";
            m6.style.display = "none";
            m7.style.display = "none";
        }
    }


});

function test() {
    console.log(posicionX);
}