const url = "http://127.0.0.1:5500/Starting-template.html#"
const API = "E0V1QuC2Ue8D0NECOPr4Syzhm8O960oaASyO2SLLM1ZOjb0WTAsOkrpp"

async function fetchData() {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": API
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchData();