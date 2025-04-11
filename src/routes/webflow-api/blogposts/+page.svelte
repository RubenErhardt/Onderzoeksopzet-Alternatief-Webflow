<script>
    export let data;
    const blogposts = data.items || [];
  </script>
  
  <h1>Laatste blogs</h1>
  
<section>
    {#each blogposts as post}
    <article>
      <h2>{post.fieldData.name}</h2>
      <p>{post.fieldData['post-summary']}</p>
  
      {#if post.fieldData['main-image']?.url}
        <img
          src={post.fieldData['main-image'].url}
          alt={post.fieldData['main-image'].alt ?? post.fieldData.name}
        />
      {/if}
  
      <a href={`/blog/${post.fieldData.slug}`}>Lees meer</a>
    </article>
  {/each}
</section>

  <style>
    section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
        gap: 1rem;
        margin: 2rem 0;
        padding: 1rem;
    }

    article img{
        max-width: 100%;
        height: 200px;
        border-radius: 8px;
        margin-bottom: 1rem;
    }

    article{
        background: #f9f9f9;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s;
        cursor: pointer;
    }

    article:hover{
        transform: scale(1.02);
    }

    h2{
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    p{
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    a{
        text-decoration: none;
        color: #0070f3;
        font-weight: bold;
    }

    a:hover{
        text-decoration: underline;
    }
  </style>
  