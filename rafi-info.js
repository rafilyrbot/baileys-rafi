import readline from "readline"
import moment from "moment"
import chalk from "chalk"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// data login
const USERNAME = "rafi"
const PASSWORD = "owner"

// fungsi login
async function login() {
  return new Promise((resolve) => {
    console.log(chalk.yellowBright("🔐 Login Diperlukan Untuk Mengakses Info Baileys\n"))
    rl.question(chalk.cyan("👤 Masukkan username anda: "), (user) => {
      if (user !== USERNAME) {
        console.log(chalk.red("❌ Username salah!"))
        process.exit(0)
      }
      rl.question(chalk.cyan("🔑 Masukkan password anda: "), (pass) => {
        if (pass !== PASSWORD) {
          console.log(chalk.red("❌ Password salah!"))
          process.exit(0)
        }
        console.log(chalk.greenBright("\n✅ Login berhasil, selamat datang Rafi!\n"))
        rl.close()
        resolve()
      })
    })
  })
}

// tunggu login dulu
await login()

// tampilkan info setelah login berhasil
console.log(chalk.redBright(`╔═════════════════════════════════════╗`))
console.log(chalk.redBright(`║  Baileys Public Executor by rafistore6`))
console.log(chalk.redBright(`║  WhatsApp Bot Multi-Device (Info)`))
console.log(chalk.redBright(`╚═════════════════════════════════════╝\n`))

console.log(chalk.redBright(`📞 Nomer Telpon : 6285883438683`))
console.log(chalk.redBright(`💬 Telegram     : https://t.me/rafistore6`))
console.log(chalk.blueBright(`🌐 GitHub       : https://github.com/rafilybot`))
console.log(chalk.blueBright(`🕒 Build at     : ${moment().format("DD MMMM YYYY, HH:mm:ss")}\n`))
console.log(chalk.blueBright(`✅ Baileys Info Mode Aktif`))
console.log(chalk.blueBright(`💬 Thanks you`))
console.log(chalk.blueBright(`📦 Baileys by Rafi`))
console.log(chalk.blueBright(`────────────────────────────────────────`))
