import { connect } from 'mongoose';
import Config from '../config/config';

const connectDB = () => {
  return connect(Config.db.uri)
}

export default connectDB