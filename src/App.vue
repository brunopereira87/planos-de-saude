<template>
  <div id="app">
    <Header />
    <main>
      <div class="container">
        <Plans />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Plans from './components/Plans/Plans';


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Plans
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


:root {
  --primary:#FFBCAB;
  --secondary: #f44336;
  --text-primary: #f44336;
  --text-warning: #f1d802;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.4rem;
  color: var(--text-primary);
}
img {
  max-width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: calc(100vh - 160px);
}

.container {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
}
.form-control {
  width: 100%;
  padding: 10px 5px;
  font-size: 1.4rem;
  border: 1px solid var(--text-primary);
  border-radius: 5px;
  color: var(--text-primary);
}

.formulate-input-errors {
  list-style: none;
  padding-left: 5px;
  margin-top: 5px;
  color: var(--text-warning);
}

.formulate-input-error{
  font-size: 1.2rem;
}

button {
  border: none;
  padding: 10px ;
  font-weight: bold;
  border-radius: 5px;
  background-color: var(--secondary);
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;

}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
