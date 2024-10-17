import mongoose from 'mongoose';

const SOLPET_DATABASE = process.env.SOLPET_MONGODB_URI!;

// connects to the solpet database
export const SOLPET_CONNECTION = mongoose.createConnection(SOLPET_DATABASE);

SOLPET_CONNECTION.on('connected', () => {
    console.log('Connected to the Solpet database');
});

SOLPET_CONNECTION.on('error', (error) => {
    console.error('Error connecting to the Solpet database:', error);
});