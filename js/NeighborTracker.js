export class NeighborTracker {
    find (blockIndex) {
        let neighbors = []
            neighbors.push(blockIndex - 1);
            neighbors.push(blockIndex - 3);
            neighbors.push(blockIndex + 1);
            neighbors.push(blockIndex + 3);
        return neighbors;
    }

    isValid (blockIndex, neighborIndex) {
        if ((neighborIndex < 0 || neighborIndex > 8) ||
            (blockIndex === 2 && neighborIndex === 3) ||
            (blockIndex === 3 && neighborIndex === 2) ||
            (blockIndex === 5 && neighborIndex === 6) ||
            (blockIndex === 6 && neighborIndex === 5)) {
            return false;
        }

        return true;
    }
}
