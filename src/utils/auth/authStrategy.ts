import passport from "passport";
import {
  Strategy,
  ExtractJwt,
  StrategyOptionsWithoutRequest,
} from "passport-jwt";
import boom from "@hapi/boom";
import { config } from "../../config/config";
import { UserService } from "../../services/userService";

const userService = new UserService();

const options: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_KEY!,
};

const jwtStrategy = new Strategy(options, async (payload, done) => {
  try {
    const user = await userService.show(payload.sub);
    if (!user) {
      return done(boom.unauthorized(), false);
    }
    return done(null, payload);
  } catch (error) {
    return done(boom.unauthorized(), false);
  }
});

passport.use(jwtStrategy);
