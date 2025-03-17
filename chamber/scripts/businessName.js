async function fetchCompanies() {
  try {
    const response = await fetch('./members.json'); 
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const companies = await response.json();
    console.log(companies);


    const detailsBusiness = document.getElementById("business");
    detailsBusiness.innerHTML = "";

    companies.forEach(company => {
      // Create card container
      const card = document.createElement("div");
      card.classList.add("company-card");

      // Create name (top center)
      const nameSpan = document.createElement("h2");
      nameSpan.classList.add("company-name");
      nameSpan.textContent = company.name;

      // Create description (below name)
      const descSpan = document.createElement("p");
      descSpan.classList.add("company-description");
      descSpan.textContent = company.description;
      
      const borderB = document.createElement("div")
      descSpan.classList.add("borderB")

      // Create main content container
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("company-content");

      // Create image container
      const img = document.createElement("img");
      img.src = company.image;
      img.alt = company.name;
      img.classList.add("company-image");

      // Create details container
      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("company-details");

      const addressSpan = document.createElement("p");
      addressSpan.classList.add("company-address");
      addressSpan.textContent = "📍ADDRESS: " + company.address;

      const phoneSpan = document.createElement("p");
      phoneSpan.classList.add("company-phone");
      phoneSpan.textContent = "📞PHONE: " + company.phone;

      
      const webSpan = document.createElement("p");
      webSpan.classList.add("company-phone");
      webSpan.textContent = "🌐URL: " + company.website;

      // Append details to the details container
      detailsDiv.appendChild(addressSpan);
      detailsDiv.appendChild(phoneSpan);
      detailsDiv.appendChild(webSpan)

      // Append image and details to contentDiv
      contentDiv.appendChild(img);
      contentDiv.appendChild(detailsDiv);

      // Append elements to card
      card.appendChild(nameSpan);
      card.appendChild(descSpan);
      card.appendChild( borderB )
      card.appendChild(contentDiv);

      // Append card to container
      detailsBusiness.appendChild(card);
    });

  } catch (e) {
    console.log("Error occurred:", e.message);
  }
}

fetchCompanies();
