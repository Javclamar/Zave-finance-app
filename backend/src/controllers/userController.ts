import { Request, Response } from 'express'
import {
  getMoneyByUser,
} from '../services/userService'

export const getUserMoney = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.query.id)
    const money = await getMoneyByUser(userId)
    res.status(200).json(money)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
