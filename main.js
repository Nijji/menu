const items = [
  {category:'fighter',
    img:'./pic/2.jpg',
    name: "sharad rao",
    title: "CEO",
    age: 47,
    education: "bsc comp sci,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {
    category:'chopper',
    img: "./pic/3.jpg",
    name: "pravad oti",
    title: "finance",
    age: 45,
    education: "bsc econ,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {category:'glider',
    img: "./pic/4.jpg",
    name: "lucy lando",
    title: "technology",
    age: 34,
    education: "bsc IT,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {category:'chopper',
    img: "./pic/5.jpg",
    name: "kevin kegan",
    title: "HR",
    age: 57,
    education: "BA HR,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {category:'jet',
    img: "./pic/6.jpg",
    name: "tom nandi",
    title: "legal",
    age: 47,
    education: "LLB,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {category:'drone',
    img: "./pic/7.jpg",
    name: "mercy masika",
    title: "PR",
    age: 37,
    education: "bsc mass comm,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {category:'chopper',
    img: "./pic/8.jpg",
    name: "fanata moja",
    title: "security",
    age: 45,
    education: "bsc criminology,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {category:'jet',
    img: "./pic/9.jpg",
    name: "irene otieno",
    title: "sales",
    age: 42,
    education: "BBA,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
  {category:'fighter',
    img: "./pic/10.jpg",
    name: "lavin marwa",
    title: "internal audit",
    age: 40,
    education: "bsc econ,MBA",
    background:
      "has more than 15 years experience in both field and management roles.",
  },
];
const btns=document.querySelectorAll('.btn')

const container=document.querySelector('main')
btns.forEach(btn => {
  btn.addEventListener('click',(e)=>{
    const category=e.currentTarget.dataset.id;
    const menu=items.filter(item=>{
     if(item.category===category){
      return item}

    })
    if (category==='all') {
      displayMenuItems(items)
    } else {
      displayMenuItems(menu)
    }
})
});
window.addEventListener("DOMContentLoaded", () => {
 displayMenuItems(items)
});

const displayMenuItems=(menuItems)=>{
  let displayItem = menuItems.map(function (item) {
    return `<article id="div">
      <img src=${item.img} class="pic" alt=${item.title} />
      <div>
        <h4>${item.name}</h4>
        <p>${item.title}</p>
         <p> ${item.age}</p>
         <p>${item.education}</p>
         <p>${item.background}</p>
      </div>
    </article>`
  });
  displayItem=displayItem.join('')
container.innerHTML=displayItem
}