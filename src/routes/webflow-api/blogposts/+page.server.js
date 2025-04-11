export async function load({ fetch }) {
    const res = await fetch('/webflow-api/blogposts');
    const data = await res.json();
  
    return {
      items: data.items
    };
  }
  