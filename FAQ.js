


export function faqInfo(){

fetch(`https://perenual.com/api/article-faq-list?key=sk-Swy465083dd9c3b432190`, { method: 'GET' })
.then(response => {
  if (!response.ok){
      throw "შეცდომა "+ response.status;
  }
  return response.json();
})
.then(result => {
  const fragment = document.createDocumentFragment();
 
  result.data.forEach((element) => {
    //  ფორ იჩით გადავუარე მოსულ ინფორმაციას
    //  შევქმენი ელემენტები მოსული თითოეული ობჯექტის
    //  ინფორმაციისთვის, მივანიჭე კლასი და ჩავაგდე ეს ინფორმაცია
    //  საბოლოოდ დივი ჩავაგდე ფრაგმენტში

    let itemDiv = document.createElement("div");
    itemDiv.classList.add("accordion-item");
    let h2 = document.createElement("h2");
    h2.classList.add("question-title")
    let p = document.createElement("p");
    p.classList.add("answer-text");

    h2.innerText = element.question;
    p.innerText = element.answer;

    itemDiv.appendChild(h2)
    itemDiv.appendChild(p);
    fragment.appendChild(itemDiv);
  });
  
  document.querySelector(".accordion-div").appendChild(fragment);

  // გაწერილია აკარდეონის ფუნქცია

  document.querySelectorAll(".accordion-item").forEach(item => {
    item.addEventListener("click", (subject) => {
    const answerText = subject.currentTarget.querySelector(".answer-text");
    answerText.classList.toggle("act");
      
    });
  });

})
.catch(error => {
  let errorText = document.createElement("p");
  errorText.innerText = error;
  document.querySelector(".accordion-div").appendChild(errorText);
});

}


