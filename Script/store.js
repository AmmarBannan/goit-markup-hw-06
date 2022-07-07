let imgLocation="./image/page2/";

const categoryObject={
    title:"",
    img:"",
    type:""
}

const tap=[{name:"Web-site",active:true},{name:"Apps",active:true},{name:"Design",active:true},{name:"Marketing",active:true}];

let categoryArray=[
    {title:"Technoduck",img:imgLocation.concat("1.jpg"),type:"Web-site"},
    {title:"Poster New Orlean vs Golden Star",img:imgLocation.concat("2.jpg"),type:"Design"},
    {title:"Seafood Restaurant ",img:imgLocation.concat("3.jpg"),type:"Apps"},
    {title:"Project Prime",img:imgLocation.concat("4.jpg"),type:"Marketing"},
    {title:"Project Boxes",img:imgLocation.concat("5.jpg"),type:"Apps"},
    {title:"Inspiration has no Borders",img:imgLocation.concat("6.jpg"),type:"Web-site"},
    {title:"Limited Edition",img:imgLocation.concat("7.jpg"),type:"Design"},
    {title:"Project LAB",img:imgLocation.concat("8.jpg"),type:"Marketing"},
    {title:"Growing Business",img:imgLocation.concat("9.jpg"),type:"Apps"}
];
const category=document.querySelector(".category");
let itemList=categoryArray.map((value,index)=>
        `<figure>
            <img src="${value.img}"></img>
            <figcaption><p class="type">${value.type}</p> <p class="title">${value.title}</p> </figcaption>
        </figure>`
).join(" ");
category.innerHTML=itemList ;



const tapList=tap.map((val,index)=>
    `<input type="button" class="button" value=${val.name}>`
).join("")


const tapes=document.querySelector(".tapes");
tapes.innerHTML+=tapList;


document.querySelector('[value=All]').addEventListener("click",()=>{
    itemList=categoryArray.map((value,index)=>
            `<figure>
                <img src="${value.img}"></img>
                <figcaption><p class="type">${value.type}</p> <p class="title">${value.title}</p> </figcaption>
            </figure>`
    ).join(" ");
    category.innerHTML=itemList ;
})

tap.map((val,index)=>{
    const button = document.querySelector(`[value=${val.name}]`);
    button.addEventListener("click", () => {

        tap[index].active?tap[index].active=false:(tap.forEach((val)=>val.active=false),tap[index].active=true)

        const activeTapes=tap.filter((val)=>val.active).map((val)=>val.name);

        const categoryDisplay=categoryArray.filter((val)=>activeTapes.includes(val.type));

        if(categoryDisplay.length>0){
        itemList=categoryDisplay.map((value,index)=>
            `<figure>
                <img src="${value.img}" alt="${value.title}"></img>
                <figcaption><p class="type">${value.type}</p> <p class="category-title">${value.title}</p> </figcaption>
            </figure>`
        ).join(" ");}
        else{ itemList=`<div class="empty"><h1 >Nothing To Show!</h1><pre><h3>Please Select form tapes above</h3></div>`};

        category.innerHTML=itemList ;
        
    });
    
})
