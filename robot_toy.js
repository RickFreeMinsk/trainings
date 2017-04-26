class Toy {
    constructor() {
        this.coordinates = [0, 0];
        this.orientation = 'North';
    }

    static get directions() {
        return {
            North: 'North',
            South: 'South',
            East: 'East',
            West: 'West'
        }
    }

    move() {
        switch (this.orientation) {
            case Toy.directions.North:
                this.coordinates[1] += 1;
                break;
            case Toy.directions.East:
                this.coordinates[0] += 1;
                break;
            case Toy.directions.South:
                if ((this.coordinates[1] - 1) < 0) {
                    console.log('No negative coordinates');
                } else {
                    this.coordinates[1] -= 1;
                }
                break;
            case Toy.directions.West:
                if ((this.coordinates[0] - 1) < 0) {
                    console.log('No negative coordinates');
                } else {
                    this.coordinates[0] -= 1;
                }
                break;
            default:
                console.log('can\'t move');
        }

        return this;
    }

    left() {
        switch (this.orientation) {
            case Toy.directions.North:
                this.orientation = Toy.directions.West;
                break;
            case Toy.directions.East:
                this.orientation = Toy.directions.North;
                break;
            case Toy.directions.South:
                this.orientation = Toy.directions.East;
                break;
            case Toy.directions.West:
                this.orientation = Toy.directions.South;
                break;
            default:
                console.log('can\'t move left');
        }

        return this;
    }

    right() {
        switch (this.orientation) {
            case Toy.directions.North:
                this.orientation = Toy.directions.East;
                break;
            case Toy.directions.East:
                this.orientation = Toy.directions.South;
                break;
            case Toy.directions.South:
                this.orientation = Toy.directions.West;
                break;
            case Toy.directions.West:
                this.orientation = Toy.directions.North;
                break;
            default:
                console.log('can\'t turn right');
        }

        return this;
    }

    report() {
        console.log(`Toy coordinates: [${this.coordinates[0]}, ${this.coordinates[1]}]; orientation: ${this.orientation}`);
        return this;
    }
}

let robot = new Toy();
robot.move()
    .move()
    .move()
    .right()
    .move()
    .move()
    .report();