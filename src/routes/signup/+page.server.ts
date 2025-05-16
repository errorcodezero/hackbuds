import { signUp } from "../../auth"
import type { Actions } from "./$types"

export const actions = { default: signUp } satisfies Actions
