document.addEventListener('DOMContentLoaded', event => {
    console.log("entro en la pagina")

    document.getElementById("delante").addEventListener("click", move)
    document.getElementById("derecha").addEventListener("click", derecha)
    document.getElementById("parar").addEventListener("click", parar)
    document.getElementById("izquierda").addEventListener("click", izquierda)

    

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
        console.log("¡SE MUEVE!");
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
            y0 = document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
            
            /*
            if (coor_flag == false) {
                x0 = document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
                y0 = document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
                coor_flag = true
            }
            */
        })
    }

    
});

function test(){
    console.log(posicionX);
}