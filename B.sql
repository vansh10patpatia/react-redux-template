Create table Bus(
    Bus_no int,
    Bus_name varchar(20),
    Src varchar(20),
    Destination varchar(20),
    Fare int,
    dt date
);

Create table Passengers(
    Passenger_id int,
    P_name varchar(20),
    Bus_no int,
    Gender varchar(10),
    Date_of_Birth date
);

Create table Availabile(
    Bus_no int,
    Available_seats int
);

Insert into Bus(Bus_no,Bus_name,Src,Destination,Fare,dt) values(101,'DDN to DELHI', 'DDN','DELHI',400,'24-December-2022');
Insert into Bus(Bus_no,Bus_name,Src,Destination,Fare,dt) values(102,'DDN to HWD', 'DDN','HWD',120,'20-December-2022');
Insert into Bus(Bus_no,Bus_name,Src,Destination,Fare,dt) values(103,'DDN to Haldwani', 'DDN','Haldwani',200,'18-December-2022');
Insert into Bus(Bus_no,Bus_name,Src,Destination,Fare,dt) values(104,'DDN to Pakistan', 'DDN','Pakistan',400,'10-December-2022');
Insert into Bus(Bus_no,Bus_name,Src,Destination,Fare,dt) values(105,'DDN to Lahore', 'DDN','Lahore',400,'15-December-2022');


Insert into Passengers(Passenger_id,P_name,Bus_no,Gender,Date_of_Birth) values(5,'Sankalp Rai',102,'Male','31-December-2002');
Insert into Passengers(Passenger_id,P_name,Bus_no,Gender,Date_of_Birth) values(4,'Akshat Goel',101,'Male','07-September-2002');
Insert into Passengers(Passenger_id,P_name,Bus_no,Gender,Date_of_Birth) values(3,'Jayant Khanna ',104,'Male','10-June-2002');
Insert into Passengers(Passenger_id,P_name,Bus_no,Gender,Date_of_Birth) values(2,'Dhairya Marwah',105,'Male','25-January-2003');
Insert into Passengers(Passenger_id,P_name,Bus_no,Gender,Date_of_Birth) values(1,'Vansh Patpatia',102,'Male','18-August-2002');

Insert into Availabile(Bus_no,Available_seats) values(101,10);
Insert into Availabile(Bus_no,Available_seats) values(102,20);
Insert into Availabile(Bus_no,Available_seats) values(103,30);
Insert into Availabile(Bus_no,Available_seats) values(104,0);
Insert into Availabile(Bus_no,Available_seats) values(105,5);

1) SELECT Bus_name,Fare from Bus;

2) SELECT B.Bus_name,A.Available_seats from Bus B,Availabile A where B.Bus_no=A.Bus_no;

3) SELECT P.P_name from Passengers P,Bus B,Availabile A where P.Bus_no=B.Bus_no and P.Bus_no=A.Bus_no and A.Available_seats>20 and B.Fare>1200;

4) SELECT B.Bus_name from Bus B,Availabile A where B.Bus_no=A.Bus_no and A.Available_seats=(SELECT MAX(Available_seats) from Availabile);

5) SELECT B.Bus_name from Bus B,Availabile A where B.Bus_no=A.Bus_no and B.Src='ISBT' OR B.Destination='ISBT';

6) SELECT COUNT(B.Bus_no) from Bus B where B.Bus_no NOT IN (SELECT P.Bus_no from Passengers P);

7) SELECT P.P_name from Passengers P,Bus B where P.Bus_no=B.Bus_no and (B.Src='Pari Chauk' OR B.Src='ISBT');

8) SELECT AVG(ROUND(MONTHS_BETWEEN(SYSDATE,P.Date_of_Birth)/12)) from Passengers P,Bus B where P.Bus_no=B.Bus_no and B.Src='Pari Chauk';

9) SELECT * FROM Availabile LEFT JOIN Bus ON Availabile.Bus_No = Bus.Bus_No WHERE Bus.Bus_No IS NULL;

10) SELECT COUNT(*) FROM Availabile A LEFT JOIN Passengers P ON A.Bus_No = P.Bus_No;


