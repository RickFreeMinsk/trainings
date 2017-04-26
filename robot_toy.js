class Toy {
    constructor() {
        this.coordinates = [0, 0];
        this.orientation = 'North';
    }

    move() {
        switch (this.orientation) {
            case 'North':
                this.coordinates[1] += 1;
                break;
            case 'East':
                this.coordinates[0] += 1;
                break;
            case 'South':
                if ((this.coordinates[1] - 1) < 0) {
                    console.log('No negative coordinates');
                } else {
                    this.coordinates[1] -= 1;
                }
                break;
            case 'West':
                if ((this.coordinates[0] - 1) < 0) {
                    console.log('No negative coordinates');
                } else {
                    this.coordinates[0] -= 1;
                }
                break;
            default:
                console.log('can\'t move');
        }
    }

    left() {
        switch (this.orientation) {
            case 'North':
                this.orientation = 'West';
                break;
            case 'East':
                this.orientation = 'North';
                break;
            case 'South':
                this.orientation = 'East';
                break;
            case 'West':
                this.orientation = 'South';
                break;
            default:
                console.log('can\'t move left');
        }
    }

    right() {
        switch (this.orientation) {
            case 'North':
                this.orientation = 'East';
                break;
            case 'East':
                this.orientation = 'South';
                break;
            case 'South':
                this.orientation = 'West';
                break;
            case 'West':
                this.orientation = 'North';
                break;
            default:
                console.log('can\'t turn right');
        }
    }

    report() {
        console.log(`Toy coordinates: [${this.coordinates[0]}, ${this.coordinates[1]}]; orientation: ${this.orientation}`);
    }
}

let robot = new Toy();
robot.move();
robot.move();
robot.move();
robot.right();
robot.move();
robot.move();
robot.report();