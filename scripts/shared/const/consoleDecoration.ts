/**
 * import node_modules
 */
import chalk from "chalk"

/**
 * main
 */
export const target = (text: string) => chalk.underline(text)
export const successMessage = (text: string) => chalk.green(text)
export const warningMessage = (text: string) => chalk.yellow(text)
