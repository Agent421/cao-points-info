import itertools, json
subs_amts = [ [0, 1],[0, 2],[0, 3],[0, 4],[0, 5],[0, 6],[1, 0],[1, 1],[1, 2],[1, 3],[1, 4],[1, 5],[2, 0],[2, 1],[2, 2],[2, 3],[2, 4],[3, 0],[3, 1],[3, 2],[3, 3],[4, 0],[4, 1],[4, 2],[5, 0],[5, 1],[6, 0] ]

grades_prefix = str(r'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\FINAL_CAO_POINTS_INFO\public\grades_and_points\grade_files')
points_prefix = str(r'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\FINAL_CAO_POINTS_INFO\public\grades_and_points\point_files')

def plus_25(grade):
    hl_sub = (46 in grade) or (56 in grade) or (66 in grade) or (77 in grade) or (88 in grade) or (100 in grade)
    if hl_sub == True and hl_sub != 25:
        return True
    else:
        return False

def is_hl(grade):
    hl_sub = (37 == grade) or (46 == grade) or (56 == grade) or (66 == grade) or (77 == grade) or (88 == grade) or (100 == grade)
    if hl_sub == True and hl_sub != 25:
        return True
    else:
        return False

def is_ol(grade):
    ol_sub = (12 == grade) or (20 == grade) or (28 == grade) or (37 == grade) or (46 == grade) or (56 == grade)
    if ol_sub == True and ol_sub != 25:
        return True
    else:
        return False

def remove_duplicates(input_list):
       output = []
       for i in range(len(input_list)):
              if input_list[i] not in output:
                     output.append(input_list[i])
       return output

def grades_perm(input_list):
    perms = list(itertools.product(input_list, repeat=6))

    all_combos = []

    perms = list(map(list, perms))

    for i in range(len(perms)):
        if True in list(map(plus_25 , perms[i])) and sum(perms[i])+25 <= 625:
            output = [perms[i] + [25] , sum(perms[i]) + 25]
        else:
            output = [perms[i] , sum(perms[i]) ]
        #print(output)
        all_combos.append(output)

    file = open(r'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\FINAL_CAO_POINTS_INFO\public\_all_grades.txt', 'w') # there's a back up in the root anyways
    file.write(str(all_combos))
    file.close()

#grades_perm([12, 20, 28, 37, 46, 56, 66, 77, 88, 100])

def calculator(hl_subs, ol_subs):

    hl_grades = [37, 46, 56, 66, 77, 88, 100]
    ol_grades = [12, 20, 28, 37, 46, 56]
    final_soultion = []

    linear_case = (hl_subs > 0 and ol_subs == 0) or (ol_subs > 0 and hl_subs == 0)

    if linear_case == True:
        if hl_subs > 0 and ol_subs == 0:
            perms = list(itertools.product(hl_grades, repeat=hl_subs))
        elif  ol_subs > 0 and hl_subs == 0:
            perms = list(itertools.product(ol_grades, repeat=abs(ol_subs)))

        for i in range(len(perms)):
            output = [0]*6
            perms[i] = list(perms[i])
            current = perms[i]
            output[:len(current)] = current

            if plus_25(current) == True and hl_subs > 0:
                output.append(25)
                ans = [ output, sum(output)]
            else:
                ans = [ output, sum(output)]

            final_soultion.append( ans )

        #return [remove_duplicates(grades_output), remove_duplicates(points_output)]
        return final_soultion

    else:
        grades_soultion = [] # temp holder to prevent duplicates
        final_soultion = []
        all_grades = open(r'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\FINAL_CAO_POINTS_INFO\public\_all_grades.txt', 'r')
        data = json.loads(all_grades.read())

        for i in range(len(data)):
            current = sorted(data[i][0], reverse=True)

            not_repeating = current not in grades_soultion

            counted_hl = list(map(is_hl , current[:6])).count(True)
            counted_ol = list(map(is_ol , current[:6])).count(True)

            same_hl_count = counted_hl == hl_subs
            same_ol_count = counted_ol == ol_subs

            # print(current, [counted_hl, hl_subs], [counted_ol, ol_subs])

            if not_repeating and same_hl_count and same_ol_count:
                final_soultion.append( [current, sum(current)] )

        return final_soultion

# f_test = open(r'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\FINAL_CAO_POINTS_INFO\public\_test.txt', 'w')
# f_test.write( str( calculator(4, 2) ) )
# f_test.close()

def write_data_to_files():
    for x in range(len(subs_amts)):
        hl_subs = subs_amts[x][0]
        ol_subs = subs_amts[x][1]

        grades_file = rf"{grades_prefix}\{subs_amts[x]}.txt"
        points_file = rf"{points_prefix}\{subs_amts[x]}_points.txt"

        w_grades = open(grades_file, "w")
        
        data = calculator(hl_subs, ol_subs)
        w_grades.write(str(data))
        w_grades.close()

        r_grades = open(grades_file, "r")
        r_grades = json.loads(r_grades.read())

        w_points = open(points_file, "w")
        
        all_points = []
        for i in range(len(r_grades)):
            current = r_grades[i][1]
            all_points.append(current)

        w_points.write(str(all_points))
        w_points.close()

        print(subs_amts[x], x+1)

# write_data_to_files()