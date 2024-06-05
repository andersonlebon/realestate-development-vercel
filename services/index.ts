import AuthService from "./auth/auth.service";
import SharedService from "./shared/shared.service";
import HomeService from './home/home.service'
import PropertyService from "./properties";
import AgentService from "./agent/agent.service";
import AgencyService from "./agency/agency.service";
import ReviewService from "./reviews/review.service";
import UserServices from "./users/user.service";


export const authService = new AuthService();
export const sharedService = new SharedService();
export const homeService = new HomeService()
export const propertiesService = new PropertyService
export const agentService = new AgentService();
export const agencyService = new AgencyService();
export const reviewService = new ReviewService();
export const usersService = new UserServices();