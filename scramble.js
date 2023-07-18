import React, { useState, useRef } from "react";
function Scramble() {
    let play = false;
    let newWords = "";
    let randWords = "";
    let sWords = [
        { word: "cat", hint: "Feline pet" },
        { word: "dog", hint: "Man's best friend" },
        { word: "car", hint: "Four-wheeled vehicle" },
        { word: "moon", hint: "Earth's natural satellite" },
        { word: "book", hint: "Contains stories and information" },
        { word: "tree", hint: "Tall plant with branches and leaves" },
        { word: "house", hint: "Place where people live" },
        { word: "beach", hint: "Sandy shoreline by the sea" },
        { word: "river", hint: "Natural flowing watercourse" },
        { word: "apple", hint: "Common fruit with a red or green skin" },
        { word: "juice", hint: "Liquid extracted from fruits or vegetables" },
        { word: "dance", hint: "Expression of movement to music" },
        { word: "music", hint: "Art form of sound and rhythm" },
        { word: "happy", hint: "Feeling of joy and contentment" },
        { word: "smile", hint: "Facial expression indicating happiness" },
        { word: "peace", hint: "State of tranquility and harmony" },
        { word: "dream", hint: "Series of thoughts and images during sleep" },
        { word: "ocean", hint: "Vast body of saltwater" },
        { word: "sunny", hint: "Having a lot of sunshine" },
        { word: "mountain", hint: "Elevated landmass with steep sides" },
        { word: "flower", hint: "Colorful plant reproductive structure" },
        { word: "coffee", hint: "Popular caffeinated beverage" },
        { word: "pizza", hint: "Italian dish with a savory crust and toppings" },
        { word: "guitar", hint: "Stringed musical instrument" },
        { word: "paint", hint: "Colored liquid used for artistic purposes" },
        { word: "summer", hint: "Warmest season of the year" },
        { word: "winter", hint: "Coldest season of the year" },
        { word: "cloud", hint: "Visible mass of condensed water vapor" },
        { word: "bird", hint: "Feathered flying creature" },
        { word: "sun", hint: "Star at the center of the solar system" },
        { word: "moon", hint: "Earth's natural satellite" },
        { word: "green", hint: "Color associated with nature" },
        { word: "red", hint: "Primary color resembling blood" },
        { word: "blue", hint: "Color of the sky on a clear day" },
        { word: "yellow", hint: "Color resembling the sun" },
        { word: "orange", hint: "Color of a citrus fruit" },
        { word: "purple", hint: "Color associated with royalty" },
        { word: "black", hint: "Color of darkness" },
        { word: "white", hint: "Color of purity and lightness" },
        { word: "park", hint: "Area of open land for recreational purposes" },
        { word: "beauty", hint: "Quality of being pleasing to the senses" },
        { word: "elephant", hint: "Large mammal with a trunk" },
        { word: "sunflower", hint: "Tall plant with yellow petals" },
        { word: "butterfly", hint: "Insect with colorful wings" },
        { word: "waterfall", hint: "Falling water from a height" },
        { word: "adventure", hint: "Exciting or daring experience" },
        { word: "chocolate", hint: "Sweet treat made from cacao" },
        { word: "mountain", hint: "Tall landform with rocky peaks" },
        { word: "wildlife", hint: "Animals and plants in their natural habitat" },
        { word: "rainbow", hint: "Multicolored arc in the sky" },
        { word: "fireworks", hint: "Colorful explosions in the sky" },
        { word: "campfire", hint: "Outdoor fire for warmth or cooking" },
        { word: "laughter", hint: "Sound made when amused or happy" },
        { word: "whisper", hint: "Speaking in a soft, hushed voice" },
        { word: "journey", hint: "Travel or passage from one place to another" },
        { word: "happiness", hint: "State of being happy or joyful" },
        { word: "paradise", hint: "Perfect or ideal place or state" },
        { word: "harmony", hint: "Agreement or pleasing combination of elements" },
        { word: "freedom", hint: "Ability to act or think without constraint" },
        { word: "sunrise", hint: "Time when the sun rises above the horizon" },
        { word: "sunset", hint: "Time when the sun sets below the horizon" },
        { word: "oasis", hint: "Fertile spot in a desert with water and vegetation" },
        { word: "serenity", hint: "State of calmness and tranquility" },
        { word: "garden", hint: "Outdoor space with plants and flowers" },
        { word: "harmony", hint: "Agreement or pleasing combination of elements" },
        { word: "joyful", hint: "Feeling or expressing great happiness" },
        { word: "discover", hint: "Find or learn something new" },
        { word: "imagine", hint: "Form a mental image or concept" }
    ];
    const initialvalue = 3;    //remaining guesses
    const step = 0;
    const i = 3;
    const j=0;
    const [count2, setcount2] = useState(0);
    const [value, setValue] = useState(initialvalue);
    const updateremainingguesses = () => {
        setValue(prevValue => prevValue - 1);
    };
    const [count1, setcount1] = useState(j);

    // use state hoook
    // inside function ->  const array = [] ... array = tempWord2 ..... array.push(new) ... setTempWord2(array)
   
    // Example usage: adding words to the array

    const resetremainingguesses = () => {
        setValue(initialvalue);
    };
    const hearts = Array.from({ length: value }, (_, index) => (
        <span key={index}>&#10084;</span>
    ));
    const [val, setVal] = useState(step);
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(i);

    // Function to handle level completion
    const handleLevelCompletion = () => {
        // Set the level completed
        setVal(val + 1);

        // Show the modal
        setTimeout(() => { setShowModal(true) }, 500)
    };
    const handleCloseModal = () => {
        // Hide the modal
        setShowModal(false);
    };
    const [iModal, setIsModal] = useState(false);

    // Function to handle level completion
    const handleGameOver = () => {
        // Set the level completed
        // Show the modal
        setcount1(0);
        setTimeout(() => { setIsModal(true); }, 500)

    };
    const handleModal = () => {
        // Hide the modal
        setIsModal(false);
    };

    // const element1Ref = useRef(null);
    const element2Ref = useRef(null);
    const element3Ref = useRef(null);
    const element6Ref = useRef(null);
    const element7Ref = useRef(null);
    const createnewwords = () => {
        const filteredWords = [];

        for (let i = 0; i < sWords.length; i++) {
            if (sWords[i].word.length === count) {
                filteredWords.push(sWords[i]);
            }
        }
        let ranobj = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        let newTempSwords = ranobj.word;
        if (element2Ref.current) {
            element2Ref.current.innerText = `Hint: ${ranobj.hint}`;
        }
        let html = "";
        for (let i = 0; i < newTempSwords.length; i++) {
            html += `<input type="text" id=id2${i} readonly='true'>`;
        }
        if (element7Ref.current) {
            element7Ref.current.innerHTML = html;
            element7Ref.current.style.fontSize = '16px';
            element7Ref.current.style.color = 'black';
            element7Ref.current.textShadow = '0px 0px 0px rgba(0, 0, 0, 0)';

        }
        //if (!tempWord2.includes(newTempSwords)) {
        //addWord(newTempSwords);
        return newTempSwords; // Given word is not present in the array, so return it
        //} else {
        //return createnewwords();
        //}

    }

    const scramblewords = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let temp = arr[i];
            let j = Math.floor(Math.random() * (i + 1));
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
    const handleDragStart = (e) => {
        console.log("dragstart");
        e.target.className += 'hold';
        console.log(e.target.id);
        window.a = document.getElementById(e.target.id);

        setTimeout(() => {
            e.target.className = 'hide';
        }, 0)
    };
    const handleDragEnd = (e) => {
        e.target.className = 'msg';
        console.log(e.target.id);
        console.log("dragend");

    };
    const handleDragOver = (e) => {
        console.log("dragover");
        e.preventDefault();
    };
    const handleDragEnter = (e) => {
        console.log("dragenter");
    };
    const handleDragLeave = (e) => {
        console.log("dragleave");
    };
    const handleDragDrop = (e) => {
        console.log("drop");
        window.a.className = 'hold';
        window.b = document.getElementById(e.target.id);

        if (window.b.nodeType === 1 && window.b.value === '') {
            if (element7Ref.current) {
                element7Ref.current.append(window.a);
                element7Ref.current.replaceChild(window.a, window.b);
            }
        }
        window.a.style.background = 'linear-gradient(rgb(165,240,255), white)';
        window.a.style.border = '1px solid black';
    };

    

    const Handleclick = () => {
        // const input = document.querySelectorAll(`input`);


        if (!play) {
            play = true;
            if (element6Ref.current) {
                element6Ref.current.innerHTML = "Guess";
            }
            newWords = createnewwords();
            //addWord(newWords);
            randWords = scramblewords(newWords.split("")).join("");
            let html1 = "";
            for (let i = 0; i < randWords.length; i++) {
                html1 += `<input type="text" id=id${i} readonly=true>`;
            }
            if (element3Ref.current) {
                element3Ref.current.innerHTML = html1;
                element3Ref.current.style.fontSize = '20px';
                element3Ref.current.style.color = 'black';
                element3Ref.current.textShadow = '0px 0px 0px rgba(0, 0, 0, 0)';
            }
            for (let i = 0; i < randWords.length; i++) {
                if (element3Ref.current) {
                    element3Ref.current.querySelectorAll(`input`)[i].value = randWords[i];
                }
            }
        }
        else {
            let tempWord = new Array();
            for (let i = 0; i < randWords.length; i++) {
                if (element7Ref.current) {
                    tempWord.push(element7Ref.current.querySelectorAll(`input`)[i].value);
                }
            }
            let guess = tempWord.join("");

            if (guess === newWords) {
                //play = false;
                if (element3Ref.current) {
                    element3Ref.current.innerHTML = `Awesome It's Correct. It is ${newWords}`;
                    element3Ref.current.style.color = 'black';
                    element3Ref.current.textShadow = '0px 0px 0px rgba(0, 0, 0, 0)';


                }
                handleLevelCompletion();
                setCount(count + 1);
                if (element6Ref.current) {
                    element6Ref.current.innerHTML = "Start Again";

                }
                setcount1(count1 + 5);
            } else {
                if (element3Ref.current) {
                    element3Ref.current.innerHTML = `You guessed it wrong. The correct word is ${newWords} `;
                    element3Ref.current.textShadow = 'none';
                }
                if (element7Ref.current) {
                    element7Ref.current.innerHTML = ``;
                }
                if (element6Ref.current) {
                    element6Ref.current.innerHTML = "Try Again";
                }

                updateremainingguesses();
                if (value < 2) {
                    handleGameOver();
                    if (element6Ref.current) {
                        element6Ref.current.innerHTML = "Play Again";
                        setCount(3);
                        setVal(0);
                        setcount2(count1);
                    }
                    resetremainingguesses();
                }
            }
        }
    }
    return (
        <div>

            <header>
                <h1>Guess The Word {'\u{1F9E0}'}</h1>
            </header>
            <section>
                <div className="details">
                    <p className="hint" ref={element2Ref}><b>Hint : </b><span></span></p>
                    <p className="guess-left"><b>Remaining guesses :</b><span className="heart">{hearts}</span></p>
                </div>
                {showModal && (
                    <div className={`modal ${showModal ? 'show' : ''}`}>
                        <div className="modal-content">
                            <div className="header">
                                <h3>Level {val} Completed!</h3>
                            </div>
                            <div className="sticker-container">
                                <img className="sticker" src="sticker.jpg" alt="Sticker" />

                            </div>
                            <p className="cong">Congratulations! You have completed Level {val}.</p>
                            <p className="cong">Your Score : {count1}</p>
                            <div className="but">
                                <button onClick={handleCloseModal}><b>Close</b></button>
                            </div>
                        </div>
                    </div>
                )}
                    
                {iModal && (
                    <div className={`modal ${iModal ? 'show' : ''}`}>
                        <div className="modal1-content">
                            <div className="header">
                                <h3>Game Over</h3>
                            </div>
                            <div className="sticker-container">
                                <img className="sticker" src="dead.png" alt="Sticker" />

                            </div>
                            <p className="cong">Oops! You Failed to guess.</p>
                            <p className="cong">Your Score : {count2}</p>
                            <div className="but">
                                <button onClick={handleModal}><b>Restart</b></button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="gameArea">
                    <h3 class="msg" ref={element3Ref} onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >SCRAMBLE</h3>
                    <button className="btn" onClick={Handleclick} ref={element6Ref} >Click here to start</button>
                    <div className="inputs" ref={element7Ref} onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDragDrop}><b>GAME</b></div>
                </div>
            </section>
        </div>
    )
}
export default Scramble;