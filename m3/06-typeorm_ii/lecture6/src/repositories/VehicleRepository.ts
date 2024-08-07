
import { AppDataSource } from "../cofig/data-source";
import { VehicleEntity } from "../entities/VehicleEntity";

const VehicleRepository = AppDataSource.getRepository(VehicleEntity);

export default VehicleRepository;