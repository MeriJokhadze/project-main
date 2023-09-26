


export function faqInfo(){



  // თუ აპი არ მუშაობს სცადეთ შემდეგი ლინკი  -> https://perenual.com/api/article-faq-list?key=sk-ka8L650c397d896a92190
fetch(`https://perenual.com/api/article-faq-list?key=sk-Y7Fv650c3525611912185`, { method: 'GET' })
.then(response => {
  if (!response.ok){
      throw "შეცდომა "+ response.status;
  }
  return response.json();
})
.then(result => {
  const fragment = document.createDocumentFragment();
 const totalItems = result.data.length;

 const partOf = Math.ceil(totalItems / 4);
 result.data.forEach((element, index) => {
    //  ფორ იჩით გადავუარე მოსულ ინფორმაციას
    //  შევქმენი ელემენტები მოსული თითოეული ობჯექტის
    //  ინფორმაციისთვის, მივანიჭე კლასი და ჩავაგდე ეს ინფორმაცია
    //  საბოლოოდ დივი ჩავაგდე ფრაგმენტში
  if(index < partOf){
    
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
  }
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





