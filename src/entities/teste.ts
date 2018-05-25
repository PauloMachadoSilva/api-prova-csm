import { questions, options } from './teste';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface ITeste {
    id: number;
    name: string;
    description: string;
    category: string;
    basePoints: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    alreadyAnswered: boolean;
    idQuestions:questions[]
    
}

export interface questions {
    id: number;
    text: string;
    type: string;
    options: options[];
    
}

export interface options {
    id: number;
    text: string;
    value: string;
    
}

@Entity('Teste')
export class Teste implements ITeste {
    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 150 })
    name: string;

    @Column({ type: 'varchar', length: 150 })
    description: string;

    @Column({ type: 'varchar', length: 150 })
    category: string;

    @Column({ type: 'varchar', length: 150 })
    basePoints: string;

    @Column({ type: 'date' })
    startDate: Date;

    @Column({ type: 'date' })
    endDate: Date;

    @Column({ type: 'boolean'})
    isActive: boolean;

    @Column({ type: 'boolean'})
    alreadyAnswered: boolean;

    @Column({ type: 'int' })
    idQuestions:questions[];

}

@Entity('questions')
export class Questions implements questions {
    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'int' })
    type: string;
   
    @Column({ type: 'varchar', length: 150 })
    text: string;

    options: Options[];

}

@Entity('options')
export class Options implements options {
    @Column({ type: 'int' })
    id: number;

    @Column({ type: 'int' })
    text: string;
   
    @Column({ type: 'varchar', length: 150 })
    value: string;
}