document.addEventListener('DOMContentLoaded', event => {
    console.log("entro en la pagina")

    document.getElementById("btn_con").addEventListener("click", connect)
    document.getElementById("btn_dis").addEventListener("click", disconnect)
    document.getElementById("move").addEventListener("click", move)
    document.getElementById("derecha").addEventListener("click", derecha)
    document.getElementById("parar").addEventListener("click", parar)
    document.getElementById("btn_jaula_on").addEventListener("click", jaulaOn)
    //document.getElementById("btn_jaula_off").addEventListener("click", )
    var ip_address = document.getElementById("ip_input").value

    var coor_flag = false;
    var x0 = 0
    var y0 = 0

    data = {
        // ros connection
        ros: null,
        rosbridge_address: ip_address,
        connected: false,
    }

    //--------------------------------------------------------------------------------------//
    //                                      Interuptor                                      //
    //--------------------------------------------------------------------------------------//

    test = document.getElementById("test");
    boolTest = false
    test.addEventListener('change', function (e) {
        boolTest = !boolTest
        if (!boolTest) {
            console.log("off");
        }
        if (boolTest) {
            console.log("on");
        }
    });

    //--------------------------------------------------------------------------------------//
    //                                      Interuptor                                      //
    //--------------------------------------------------------------------------------------//

    function connect() {
        console.log("Clic en connect")

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
    }

    function disconnect() {
        data.ros.close()
        data.connected = false
        console.log('Clic en botón de desconexión')
    }

    function move() {
        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })
        let message = new ROSLIB.Message({
            linear: { x: 0.3, y: 0, z: 0, },
            angular: { x: 0, y: 0, z: 0, },
        })
        topic.publish(message)
        getPosition()
    }

    function parar() {
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
        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })
        let message = new ROSLIB.Message({
            linear: { x: 0, y: 0, z: 0, },
            angular: { x: 0, y: 0, z: 0.8, },
        })
        topic.publish(message)
    }

    function getPosition() {
        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/odom',
            messageType: 'nav_msgs/msg/Odometry'
        })
        topic.subscribe((message) => {
            data.position = message.pose.pose.position
            document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
            document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)

            if (coor_flag == false) {
                x0 = document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
                y0 = document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
                coor_flag = true
            }
        })
    }

    function jaulaOn() {
        let x1 = x0 + 1
        let x2 = x0 - 1
        let y1 = y0 + 1
        let y2 = y0 - 1

        if (x0 <= x1 && x0 >= x2) {
            if (y0 <= y1 && y0 >= y2) {
                move()
            } else {
                parar()
            }
        } else {
            parar()
        }

    }

});