const express = require('express');
function main(){
    const app = express();

    app.listen(3000, () => {
        console.log(`Server is running on http://localhost:3000`);
    });
};

main();