import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import { RES_TYPE } from '../../../common/typing/rest-req'
export const secret = "mysecretkey-ben";


export function verifyToken(req: Request, res: Response, next: NextFunction) {
  // 从请求头或其他适当的位置获取JWT
  const token = req.header('Authorization');
  // 检查是否提供了令牌
  if (!token) {
    return res.status(401).send({
      type: RES_TYPE.unauthorized,
      message: "unauthorized"
    })
  }

  // 验证JWT
  jwt.verify(token, secret, (err, decoded: any) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        // 令牌已过期，可以在此执行相应的操作，比如重新颁发令牌
        return res.status(403).send({
          type: RES_TYPE.unauthorized,
          message: "token过期"
        })
      } else {
        // 其他验证错误
        return res.status(403).send({
          type: RES_TYPE.unauthorized,
          message: "验证失败"
        })
      }
    }

    next();
  });
}

 
