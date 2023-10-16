const body = document.querySelector("body");
const img = document.createElement("img");
const INFO = document.createElement("info");
const INFO_TITLE = document.createElement("h1");
const INFO_PARAGRAPH = document.createElement("p");
const EMAIL_SECTION = document.createElement("enter-email");
const EMAIL = document.createElement("p");
const EMAIL_INPUT = document.createElement("input");
const SUBSCRIBE_BUTTON = document.createElement("button");
const ERROR_MESSAGE = document.createElement("span");

const SUCCESS_PAGE = document.createElement("success");
const SUCCESS_MESSAGE = document.createElement("h1");
const SUCCESS_TEXT = document.createElement("p");
const SUCCESS_BUTTON = document.createElement("button");




const ICON_LIST = new Image();
const ICON_SUCCESS = new Image();
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//CSS VARIABLES
const font = "'Roboto', serif";


//SET

img.src = "A:/front-end/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-mobile.svg";
img.alt = "basadasd";
SUCCESS_MESSAGE.textContent = "Thanks for subscribing!"
SUCCESS_MESSAGE.style.fontSize = "2rem";
SUCCESS_BUTTON.textContent = "Dismiss message";

ICON_LIST.src = "./assets/images/icon-list.svg";
ICON_SUCCESS.src = "./assets/images/icon-success.svg";
ICON_SUCCESS.style.alignSelf = "flex-start";
EMAIL.textContent = "Email address:";
EMAIL.style.fontWeight = "900";
EMAIL.style.fontSize = "0.8rem";
EMAIL.style.display = "flex";
EMAIL.style.justifyContent="space-between";
ERROR_MESSAGE.textContent = "Invalid email address";
ERROR_MESSAGE.style.color = "red";
ERROR_MESSAGE.style.visibility = "hidden";

EMAIL_INPUT.setAttribute("name", "email");
EMAIL_INPUT.setAttribute("placeholder", "Enter your email");
EMAIL_INPUT.setAttribute("autocomplete", "off");
SUBSCRIBE_BUTTON.setAttribute("type", "button");
SUBSCRIBE_BUTTON.textContent = "Subscribe to monthly letter";

INFO_TITLE.textContent = "Stay updated!";
INFO_PARAGRAPH.textContent = "Join 60.000+ product managers receiving monthly updates on:";

//INSERT
INFO.appendChild(INFO_TITLE);
INFO.appendChild(INFO_PARAGRAPH);
body.appendChild(img);
body.appendChild(INFO);
Task("Product discovery and building what matters");
Task("Measuring to ensure updates are a success");
Task("And much more!");
INFO.appendChild(EMAIL_SECTION);
EMAIL_SECTION.appendChild(EMAIL);
EMAIL_SECTION.appendChild(EMAIL_INPUT);
EMAIL_SECTION.appendChild(SUBSCRIBE_BUTTON);
EMAIL.appendChild(ERROR_MESSAGE);
SUCCESS_PAGE.appendChild(ICON_SUCCESS);
SUCCESS_PAGE.appendChild(SUCCESS_MESSAGE);
SUCCESS_PAGE.appendChild(SUCCESS_TEXT);
SUCCESS_PAGE.appendChild(SUCCESS_BUTTON);

//UTILITY
function UseCss(element, styles) 
{
  for (let style in styles) 
  {
    element.style[style] = styles[style];
  }
}

function Tags(tag, styles) 
{
  const elements = document.getElementsByTagName(tag);
  for (let i = 0; i < elements.length; i++) 
  {
    let element = elements[i];
    UseCss(element, styles);
  }
}

function Task(text) 
{
  const taskStyles = {
	  display:"flex"
  }
  let image = ICON_LIST.cloneNode();
  let task = document.createElement("task");
  task.appendChild(image);
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.marginLeft = "10px";
  task.appendChild(paragraph);
  INFO.appendChild(task);
  UseCss(task, taskStyles);
}

//EVENTS
SUBSCRIBE_BUTTON.addEventListener("click", e => {
  if (emailRegex.test(EMAIL_INPUT.value)) {
  	body.removeChild(INFO);
SUCCESS_TEXT.textContent = `A confirmation email has been sent to ${EMAIL_INPUT.value}. Please open it and click 
the button inside to confirm your subscription`;
	body.appendChild(SUCCESS_PAGE);
	EMAIL_INPUT.value = "";
  } else {
  	ERROR_MESSAGE.style.visibility = "visible";
	EMAIL_INPUT.value = "";
  }
});

SUCCESS_BUTTON.addEventListener("click", e => {
      body.removeChild(SUCCESS_PAGE);
      body.appendChild(INFO);
    });


//STYLES
const bodyStyles = {
	fontFamily: font,
	margin:"0",
	display:"flex",
	flexDirection: "column"
}


const imgStyles = {
	width: "100%"
}


const infoStyles = {
	display: "flex",
	flexDirection: "column",
	padding: "1em"
}

const headerStyles = {
	fontWeight: 400
}

const emailStyles = {
	display: "flex",
	flexDirection: "column"
}

const inputStyles = {
	borderRadius: "10px",
	padding:"15px",
}

const buttonStyles = {
	padding:"15px",
	borderRadius:"10px",
	backgroundColor: "#292131",
	borderWidth: 0,
	color: "white",
	fontSize: "0.9rem",
	marginTop: "1em"
}

const successPageStyles = {
  	display: "flex",
        flexDirection: "column",
	padding:"3em"
}


Tags("h1", headerStyles);



UseCss(SUCCESS_PAGE, successPageStyles);
UseCss(EMAIL_SECTION, emailStyles);
UseCss(SUCCESS_BUTTON, buttonStyles);
UseCss(EMAIL_INPUT, inputStyles);
UseCss(img, imgStyles);
UseCss(body, bodyStyles);
UseCss(INFO, infoStyles);
UseCss(SUBSCRIBE_BUTTON, buttonStyles);
