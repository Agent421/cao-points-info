def points_perm():
    import json, sys
    grades = open('all_ol_grades.txt' , 'r')
    points = open('all_ol_points.txt' , 'w')
    file = grades.read()


    all_points = []
    data = json.loads(file)

    for i in range(len(data)):
        all_points.append(data[i][1])

    points.write(str(all_points))

    grades.close()
    points.close()
