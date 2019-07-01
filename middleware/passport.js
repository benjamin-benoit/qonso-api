import jwt from "jsonwebtoken";

export default function (req, res, next) {
	// const regexp = /\/(\w*)$/;
	// const match = regexp.exec(req.originalUrl);

	if (req.method != "GET") {
		const token = req.headers.authorization
		if (token) {
			jwt.verify(token.replace("Bearer ", ""), process.env.SECRET_KEY, (err, decoded) => {
				if (err) {
					res.status(400).json({ err: "bad / invalide token" });
				}
				else {
					next();
				}
			});
		}
		else {
			res.status(400).json({ err: "need a token for this action" });
		}
	}
	else {
		next();
	}
}