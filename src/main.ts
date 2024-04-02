import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import { db } from './services/sqlite'

// await db.exec('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);')

// for (let index = 0; index < 1000; index++) {
//   const res = await db.exec(`INSERT INTO test (name) VALUES ('test ${index}');`)
//   if (res?.err)
//     console.log('Failed to insert', res.err)
// }

createApp(App).mount('#app')
