module.exports = function factFile() {

    const http = [
        { 
            fact: 'http is a stateless protocal because each command is executed independently.'
        },
        {
            fact: 'http stands for HyperText Transfer Protocal.'
        }, 
        {
            fact: 'http runs the world!!.'
        }   
    ];
    return http[Math.floor(Math.random() * http.length)];
};




 



