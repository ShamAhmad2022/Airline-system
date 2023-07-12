# Lab 11
## Event Driven Applications
Authors: Sham Al-Jalam

## URLs

*  pull request: [https://github.com/ShamAhmad2022/caps/pull/1](https://github.com/ShamAhmad2022/caps/pull/1)

### Running the app:
* node system.js

    * Returns Object
    ```Js
    Manager: new flight with ID ‘ds7g86sa8v87dsv60v876d’ have been scheduled
    Flight {
            event: 'new-flight',
            time: 2022-02-28 15:30:13
            Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: 'ds7g86sa8v87dsv60v876d',
            pilot: 'Jane doe',
            destination: ‘ Manchester, UK’
        }
    }
    Pilot: flight with ID ‘ds7g86sa8v87dsv60v876d’ took-off
    Flight {
            event: 'took_off',
            time: 2022-02-28 15:30:17
            Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: 'ds7g86sa8v87dsv60v876d',
            pilot: 'Jane doe',
            destination: ‘ Manchester, UK’
        }
    }
    Pilot: flight with ID 'ds7g86sa8v87dsv60v876d' has arrived
    Flight {
            event: 'arrived',
            time: 2022-02-28 15:30:20
            Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: 'ds7g86sa8v87dsv60v876d',
            pilot: 'Jane doe',
            destination: ‘ Manchester, UK’
        }
    }
    Manager: we’re greatly thankful for the amazing flight, Jane doe

    ```

### UML
![WML](./airline-system.png)
