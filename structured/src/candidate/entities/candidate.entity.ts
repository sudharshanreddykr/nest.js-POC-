import {
 Entity,
 PrimaryGeneratedColumn,
 Column,
 OneToOne,
 JoinColumn,
 ManyToOne,
 OneToMany,
} from "typeorm";

@Entity({ name: "candidate" })
export class Candidate {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column({ nullable: false, length: 50 })
 firstName: string;

 @Column({ default: null, length: 50 })
 middleName: string;

 @Column({ nullable: false, length: 50 })
 lastName: string;

 @Column({ default: null, length: 15 })
 homePhone: string;

 @Column({ default: null, length: 10 })
 gender: string;

 @Column({ default: null })
 dateBirth: string;

 @Column({ default: null, length: 25 })
 panCard: string;

 @Column({ default: null, length: 50 })
 passport: string;

 @Column({ default: null, length: 25 })
 aadhaarCard: string;

 @Column({ nullable: true, length: 50 })
 parentFirstName: string;

 @Column({ nullable: true, length: 50 })
 parentMiddleName: string;

 @Column({ nullable: true, length: 50 })
 parentLastName: string;

 @Column({ nullable: true, length: 100 })
 emergencyContactName: string;

 @Column({ nullable: true, length: 100 })
 emergencyEmail: string;

 @Column({ nullable: true, length: 15 })
 emergencyPhone: string;

 @Column({ nullable: true, length: 50 })
 bloodGroup: string;

 @Column({ default: null, length: 50 })
 allergies: string;

 @Column({
  nullable: false,
  type: "timestamp",
  default: () => "CURRENT_TIMESTAMP",
 })
 createdAt: Date;

 @Column({
  nullable: false,
  type: "timestamp",
  default: () => "CURRENT_TIMESTAMP()",
  onUpdate: "CURRENT_TIMESTAMP()",
 })
 updatedAt: Date;

 @Column({ nullable: true, default: "admin", length: 50 })
 createdBy: string;

 @Column({ nullable: true, default: "admin", length: 50 })
 updatedBy: string;

 @Column({ nullable: true, default: 1 })
 isActive: boolean;


}
