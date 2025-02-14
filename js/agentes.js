document.addEventListener("DOMContentLoaded", () => {
    const characterCards = document.querySelectorAll(".character-card");
    const popup = document.querySelector(".character-popup");
    const overlay = document.querySelector(".overlay");
    const closePopup = document.querySelector(".close-popup");
    const closePopupSelect= document.querySelector(".select-character");
    const selectButton = document.querySelector(".select-character");
    const agentName = document.querySelector(".agent-name");
    const agentImage = document.querySelector(".agent-image");
    const agentDescription = document.querySelector(".agent-description");
    const agentRole = document.querySelector(".agent-role");
    const abilityIcons = document.querySelectorAll(".ability-icon");
    const abilityNames = document.querySelectorAll(".ability-name");

    const closeBtn = document.getElementById("closeAgents");
    const playBtn = document.getElementById("playButton");

    // Datos de los agentes
    const agentsData = {
        brimstone: {
            name: "Brimstone",
            image: "media/Brim.webp",
            role: "media/habilities/Duelista.png",
            description: "De origen estadounidense, Brimstone cuenta con un arsenal de órbita que garantiza que su equipo siempre vaya por delante. Su capacidad para aportar herramientas de utilidad de una forma segura y precisa lo convierte en un comandante de primera línea sin igual.",
            abilities: [
                { name: "INCENDIARIO", icon: "media/habilities/HBri1.png" },
                { name: "CORTINA DE HUMO", icon: "media/habilities/HBri2.png" },
                { name: "BALIZA ESTIMULANTE", icon: "media/habilities/HBri3.png" },
                { name: "GOLPE ORBITAL", icon: "media/habilities/HBri4.png" }
            ]
        },

        cypher: {
            name: "Cypher",
            image: "media/Cypher.webp",
            role: "media/habilities/Centinela.png",
            description: "Cypher es un experto en información de Marruecos que se especializa en redes de vigilancia y es capaz de seguirle la pista al enemigo constantemente. No hay secreto a salvo ni maniobra que pase desapercibida. Cypher siempre está alerta.",
            abilities: [
                { name: "PRISIÓN CIBERNÉTICA", icon: "media/habilities/HC1.png" },
                { name: "CÁMARA ESPÍA", icon: "media/habilities/HC2.png" },
                { name: "CABLE TRAMPA", icon: "media/habilities/HC3.png" },
                { name: "HURTO NEURONAL", icon: "media/habilities/HC4.png" }
            ]
        },

        jett: {
            name: "Jett",
            image: "media/Jett.webp",
            role: "media/habilities/Duelista.png",
            description: "Jett viene de Corea del Sur, y su estilo de lucha ágil y evasivo le permite asumir grandes riesgos. Corre y salta de aquí para allá en las refriegas y hace trizas a los enemigos con una rapidez espectacular.",
            abilities: [
                { name: "VENDAVAL", icon: "media/habilities/HJ1.png" },
                { name: "VIENTO DE COLA", icon: "media/habilities/HJ2.png" },
                { name: "BORRASCA", icon: "media/habilities/HJ3.png"},
                { name: "TORMENTA DE CUCHILLAS", icon: "media/habilities/HJ4.png" }
            ]
        },

        omen: {
            name: "Omen",
            image: "media/Omen.webp",
            role: "media/habilities/Controlador.png",
            description: "Omen es un fantasma de tiempos pasados que acecha en las sombras. Es capaz de cegar al enemigo, teleportarse a través del campo de batalla y sembrar el caos y la paranoia mientras sus rivales se preguntan dónde atacará la próxima vez.",
            abilities: [
                { name: "PARANOIA", icon: "media/habilities/HO1.png" },
                { name: "VELO TENEBROSO", icon: "media/habilities/HO2.png" },
                { name: "APARICIÓN TENEBROSA", icon: "media/habilities/HO3.png" },
                { name: "DESDE LAS SOMBRAS", icon: "media/habilities/HO4.png" }
            ]
        },

        phoenix: {
            name: "Phoenix",
            image: "media/Phoenix.webp",
            role: "media/habilities/Duelista.png",
            description: "Phoenix proviene del Reino Unido y sus poderes estelares salen a relucir con su estilo de combate, que prende fuego al campo de batalla de forma deslumbrante. No le hacen falta refuerzos; es él quién se lanza al combate y marca el ritmo. ",
            abilities: [
                { name: "BOLA CURVA", icon: "media/habilities/HP1.png" },
                { name: "COMBUSTIÓN", icon: "media/habilities/HP2.png" },
                { name: "LLAMARADA", icon: "media/habilities/HP3.png" },
                { name: "CENIZAS", icon: "media/habilities/HP4.png" }
            ]
        },

        sage: {
            name: "Sage",
            image: "media/Sage.webp",
            role: "media/habilities/Centinela.png",
            description: "Originaria de China, Sage destaca a la hora de crear espacios seguros para su equipo allá donde va. Sus capacidades especiales para revivir a compañeros caídos en batalla y para mantener a raya los asaltos enemigos la convierten en la calma en mitad de la tormenta para su equipo. ",
            abilities: [
                { name: "ORBE DE RALENTIZACIÓN", icon: "media/habilities/HSa1.png" },
                { name: "ORBE DE SANACIÓN", icon: "media/habilities/HSa2.png" },
                { name: "ORBE BARRERA", icon: "media/habilities/HSa3.png" },
                { name: "RESURRECCIÓN", icon: "media/habilities/HSa4.png" }
            ]
        },

        sova: {
            name: "Sova",
            image: "media/Sova.webp",
            role: "media/habilities/Iniciador.webp",
            description: "Nacido en el eterno invierno de la tundra rusa, Sova destaca a la hora de localizar, perseguir y eliminar a los enemigos con una eficiencia y una precisión inclementes. Su arco personalizado junto con su sobrenatural capacidad de rastreamiento hacen que sea imposible escapar.",
            abilities: [
                { name: "FLECHA EXPLOSIVA", icon: "media/habilities/HSo1.png" },
                { name: "PROYECTIL DE RECONOCIMIENTO", icon: "media/habilities/HSo2.png" },
                { name: "DRON DE RECONOCIMIENTO", icon: "media/habilities/HSo3.png" },
                { name: "FURIA DEL CAZADOR", icon: "media/habilities/HSo4.png" }
            ]
        },

        viper: {
            name: "Viper",
            image: "media/Viper.webp",
            role: "media/habilities/Controlador.png",
            description: "Nacido en el eterno invierno de la tundra rusa, Sova destaca a la hora de localizar, perseguir y eliminar a los enemigos con una eficiencia y una precisión inclementes. Su arco personalizado junto con su sobrenatural capacidad de rastreamiento hacen que sea imposible escapar.",
            abilities: [
                { name: "NUBE VENENOSA", icon: "media/habilities/HV1.png" },
                { name: "CORTINA DE HUMO", icon: "media/habilities/HV2.png" },
                { name: "VENENO DE SERPIENTE", icon: "media/habilities/HV3.png" },
                { name: "POZO DE LA VÍBORA", icon: "media/habilities/HV4.png" }
            ]
        },

        breach: {
            name: "Breach",
            image: "media/Brech.webp",
            role: "media/habilities/Iniciador.webp",
            description: "Breach, el sueco biónico, dispara una serie de explosiones cinéticas controladas para abrirse paso por el territorio enemigo. Su capacidad para infligir daño y sembrar el caos garantiza que los combates siempre estén de su parte.",
            abilities: [
                { name: "EXPLOSIÓN CEGADORA", icon: "media/habilities/HBri1.png" },
                { name: "FALLA", icon: "media/habilities/HBri2.png" },
                { name: "RÉPLICA", icon: "media/habilities/HBri3.png" },
                { name: "FRAGOR IMPARABLE", icon: "media/habilities/HBri4.png" }
            ]
        },

        raze: {
            name: "Raze",
            image: "media/Raze.webp",
            role: "media/habilities/Duelista.png",
            description: "Raze llega desde Brasil con ganas de hacer que todo salte por los aires. Con su estilo de juego basado en la fuerza bruta, destaca a la hora de barrer a grupos de enemigos atrincherados y de despejar áreas estrechas con explosión y sin compasión.",
            abilities: [
                { name: "EXPLOSIÓN CEGADORA", icon: "media/habilities/HR1.png" },
                { name: "FALLA", icon: "media/habilities/HR2.png" },
                { name: "RÉPLICA", icon: "media/habilities/HR3.png" },
                { name: "FRAGOR IMPARABLE", icon: "media/habilities/HR3.png" }
            ]
        }
    };

    // Mostrar la ventana emergente con los datos del personaje
    characterCards.forEach(card => {
        card.addEventListener("click", () => {
            const agent = card.getAttribute("data-agent");
            const data = agentsData[agent];

            agentName.textContent = data.name;
            agentImage.src = data.image;
            agentRole.src = data.role;
            agentDescription.textContent = data.description;
            
            data.abilities.forEach((ability, index) => {
                abilityIcons[index].src = ability.icon;
                abilityNames[index].textContent = ability.name;
            });

            popup.classList.add("show");
            overlay.classList.add("show");
        });
    });

    closePopup.addEventListener("click", () => {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    });

    closePopupSelect.addEventListener("click", () => {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    });



        // Cerrar la selección de agentes y volver a la página principal
        closeBtn.addEventListener("click", () => {
            window.location.href = "configuracion.html";
        });
    
        // Ir a la siguiente página cuando se presiona PLAY
        playBtn.addEventListener("click", () => {
            window.location.href = "mapas.html"; // Cambia esto según la siguiente página
        });
    
    
});
