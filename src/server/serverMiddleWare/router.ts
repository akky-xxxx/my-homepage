/**
 * import node_modules
 */
import { Router } from "express"

/**
 * import modules
 */
import replaceToWebpMiddleWare from "../modules/replaceToWebp"

/**
 * main
 */
const router = Router()
router.get("*.webp.*", replaceToWebpMiddleWare)

export default router
