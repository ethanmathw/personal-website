import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def create_cross_walls(size):
    mid = size // 2
    start = round(0.2 * size)
    cross_walls = set()

    for i in range(round(0.6 * size)):
        cross_walls.add((mid, start + i))
        cross_walls.add((start + i, mid))

    return cross_walls

grid_size = [1, 10, 100, 1000, 10000]

for size in grid_size:
    total_points = size ** 2
    num_walls = int(total_points * 0.1)
    num_paths = total_points - num_walls

    all_points = [(i, j) for i in range(size) for j in range(size)]

    cross_walls = create_cross_walls(size)

    grid_data = []
    for index, point in enumerate(all_points):
        is_wall = 1 if point in cross_walls else 0
        grid_data.append((point[0], point[1], is_wall))

    # DataFrame with Row, Col, and Wall (1 for wall, 0 for no wall)
    grid_df = pd.DataFrame(grid_data, columns=['Row', 'Col', 'Wall'])

    

    csv_filename = 'data' + str(size) + "by" + str(size) + '.csv'
    grid_df.to_csv(csv_filename, sep=' ', index=False)



