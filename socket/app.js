import {Server} from "socket.io"

const io = new Server({
    cors:{
        origin:"http://localhost:5173",
    },
})

let onlineUser = []

const addUser= (userId,socketId)=>{
    const userExit= onlineUser.find((user)=>user.userId === userId);
    if(!userExit){
        onlineUser.push({userId,socketId});
    }
;}

const removeUser = (socketId)=>{
    onlineUser = onlineUser.filter((user)=>user.socketId !== socketId);
};

const getUser = (userId)=>{
    return onlineUser.find((user)=>user.userId === userId);
}

io.on("connection",(socket)=>{
    socket.on("newUser",(userId)=>{   //listening newuser event
       addUser(userId,socket.id)
       
    });

    socket.on("sendMessage",({receiverId,data})=>{
        const receiver = getUser(receiverId);
        // io.to(receiver.socketId).emit("getMessage",data);
        if (receiver) {
            io.to(receiver.socketId).emit("getMessage", data);
            // console.log("Message sent to:", receiverId, "via socket:", receiver.socketId);
        } else 
            console.error("Receiver not found for ID:", receiverId);
    });

    socket.on("disconnect",()=>{
        removeUser(socket.id);
    });
});

io.listen("8000");