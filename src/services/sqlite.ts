import type { Extension } from 'socket:extension'
import extension from 'socket:extension'
import path from 'socket:path'
import console from 'socket:console'

console.log('Loading sqlite service')

const dbPath = `${path.RESOURCES}/data.db` // Removed unnecessary string concatenation
const sqliteExtension: Extension<Record<string, any>> = await extension.load('sqlite3') // Renamed to avoid confusion
const { err, data: newdb } = await sqliteExtension.binding.open({ path: dbPath }) // Corrected variable name

if (err)
  console.error('Failed to open database', err)

class DB {
  db: any
  sqlite: Extension<Record<string, any>>

  constructor(sqlite: Extension<Record<string, any>>, db: any) {
    this.sqlite = sqlite
    this.db = db
  }

  async exec(query: string) {
    try {
      const response = await this.sqlite.binding.exec({ query, id: this.db.id }) // Access sqlite from instance
      return response as { err: any, data: any }
    }
    catch (error) {
      console.error('Failed to execute query', error)
    }
  }

  async close() {
    try {
      const response = await this.sqlite.binding.close({ id: this.db.id }) // Access sqlite from instance
      return response as { err: any, data: any }
    }
    catch (error) {
      console.error('Failed to close database', error)
    }
  }
}

export const db = new DB(sqliteExtension, newdb) // Pass sqliteExtension instead of sqlite
