<template>

<nav class="nav">
    <img class="imagem-logo" src="~/assets/images/logo-side-dark.png" alt="">
    <ul> 
        <li><a class="nav-link " href="#">Active</a></li>
        <li><a class="nav-link" href="#">Link</a></li>
        <li><a class="nav-link" href="#">Link</a></li>
        <li><a class="nav-link " href="#">Disabled</a></li> 
    </ul>
</nav>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
nav ul {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
}

nav li {
    list-style: none;
}

.nav {
    position: relative !important;
    display: flex;
    justify-content: space-between;
    background: #4c4c4c;
    padding: 13px 12%;
}

.nav .nav-link{
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    text-transform: uppercase;
    padding: 0 20px;
    font-weight: 600;
}

.nav .nav-link:hover {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: blue;
    text-transform: uppercase;
    padding: 0 20px;
    font-weight: 600;
}
</style>