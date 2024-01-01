export default async function Apifetch() {
    try {
      const response = await fetch('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db');
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
  
      if (!data || !data.ecommerce) {
        throw new Error('Invalid data format');
      }
  
      return data.ecommerce;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  }
  