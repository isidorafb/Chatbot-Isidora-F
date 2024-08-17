document.getElementById("sendBtn").addEventListener("click", function() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput) {
        addUserMessage(userInput);
        getBotResponse(userInput);
        document.getElementById("userInput").value = '';
    }
});

function addUserMessage(message) {
    let chatbox = document.getElementById("chatbox");
    let userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatbox.appendChild(userMsg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userInput) {
    let chatbox = document.getElementById("chatbox");
    let botMsg = document.createElement("div");
    botMsg.className = "bot-message";

    if (userInput.toLowerCase().includes("pasta")) {
        botMsg.innerHTML = `
            <strong>Receta de Pasta:</strong><br>
            <strong>Ingredientes:</strong>
            <ul>
                <li>200g de pasta</li>
                <li>2 dientes de ajo</li>
                <li>200ml de salsa de tomate</li>
                <li>Sal y pimienta al gusto</li>
            </ul>
            <strong>Pasos:</strong>
            <ol>
                <li>Cocina la pasta en agua con sal hasta que esté al dente.</li>
                <li>Sofríe el ajo en una sartén con un poco de aceite.</li>
                <li>Añade la salsa de tomate y cocina a fuego lento.</li>
                <li>Escurre la pasta y mézclala con la salsa.</li>
                <li>Agrega sal y pimienta al gusto, y sirve caliente.</li>
            </ol>
        `;
    } else if (userInput.toLowerCase().includes("ensalada")) {
        botMsg.innerHTML = `
            <strong>Receta de Ensalada:</strong><br>
            <strong>Ingredientes:</strong>
            <ul>
                <li>Lechuga</li>
                <li>Tomate</li>
                <li>Pepino</li>
                <li>Cebolla</li>
                <li>Aceitunas</li>
                <li>Aderezo al gusto</li>
            </ul>
            <strong>Pasos:</strong>
            <ol>
                <li>Lava y corta la lechuga, el tomate, el pepino y la cebolla.</li>
                <li>Mezcla todos los ingredientes en un bol grande.</li>
                <li>Añade las aceitunas y mezcla nuevamente.</li>
                <li>Agrega el aderezo de tu elección justo antes de servir.</li>
            </ol>
        `;
    } else if (userInput.toLowerCase().includes("galletas")) {
        botMsg.innerHTML = `
            <strong>Receta de Galletas de Chocolate:</strong><br>
            <strong>Ingredientes:</strong>
            <ul>
                <li>200g de harina</li>
                <li>100g de azúcar</li>
                <li>100g de mantequilla</li>
                <li>1 huevo</li>
                <li>100g de chips de chocolate</li>
                <li>1 cucharadita de vainilla</li>
                <li>1/2 cucharadita de bicarbonato de sodio</li>
            </ul>
            <strong>Pasos:</strong>
            <ol>
                <li>Precalienta el horno a 180°C (350°F).</li>
                <li>Mezcla la mantequilla con el azúcar hasta que esté cremosa.</li>
                <li>Añade el huevo y la vainilla, y mezcla bien.</li>
                <li>Agrega la harina y el bicarbonato, y mezcla hasta que se forme una masa.</li>
                <li>Incorpora los chips de chocolate a la masa.</li>
                <li>Forma pequeñas bolitas de masa y colócalas en una bandeja para hornear.</li>
                <li>Hornea durante 10-12 minutos o hasta que estén doradas.</li>
                <li>Deja enfriar antes de servir.</li>
            </ol>
        `;
    } else if (userInput.toLowerCase().includes("torta")) {
        botMsg.innerHTML = `
            <strong>Receta de Pastel de Vainilla:</strong><br>
            <strong>Ingredientes:</strong>
            <ul>
                <li>200g de harina</li>
                <li>200g de azúcar</li>
                <li>200g de mantequilla</li>
                <li>4 huevos</li>
                <li>1 cucharadita de vainilla</li>
                <li>1 cucharadita de polvo de hornear</li>
                <li>100ml de leche</li>
            </ul>
            <strong>Pasos:</strong>
            <ol>
                <li>Precalienta el horno a 180°C (350°F).</li>
                <li>Mezcla la mantequilla con el azúcar hasta que esté cremosa.</li>
                <li>Añade los huevos uno por uno, batiendo bien después de cada adición.</li>
                <li>Agrega la vainilla y mezcla bien.</li>
                <li>Incorpora la harina y el polvo de hornear, alternando con la leche, y mezcla hasta obtener una masa homogénea.</li>
                <li>Vierte la masa en un molde engrasado y enharinado.</li>
                <li>Hornea durante 30-35 minutos o hasta que al insertar un palillo, éste salga limpio.</li>
                <li>Deja enfriar antes de desmoldar y servir.</li>
            </ol>
        `;
    } else if (userInput.toLowerCase().includes("brownie")) {
        botMsg.innerHTML = `
            <strong>Receta de Brownies de Chocolate:</strong><br>
            <strong>Ingredientes:</strong>
            <ul>
                <li>200g de chocolate oscuro</li>
                <li>150g de mantequilla</li>
                <li>200g de azúcar</li>
                <li>3 huevos</li>
                <li>100g de harina</li>
                <li>1 cucharadita de vainilla</li>
                <li>Una pizca de sal</li>
            </ul>
            <strong>Pasos:</strong>
            <ol>
                <li>Precalienta el horno a 180°C (350°F).</li>
                <li>Derrite el chocolate y la mantequilla en baño maría.</li>
                <li>Retira del fuego y añade el azúcar, mezclando bien.</li>
                <li>Agrega los huevos uno por uno, mezclando bien después de cada adición.</li>
                <li>Incorpora la harina, la vainilla y la sal, y mezcla hasta que esté todo bien integrado.</li>
                <li>Vierte la mezcla en un molde engrasado y hornea durante 25-30 minutos.</li>
                <li>Deja enfriar antes de cortar en porciones y servir.</li>
            </ol>
        `;
    } else {
        botMsg.innerText = "Lo siento, no tengo esa receta. Prueba preguntando por recetas de pasta, ensalada, galletas, torta o brownies.";
    }
    
    chatbox.appendChild(botMsg);
    chatbox.scrollTop = chatbox.scrollHeight;
}
