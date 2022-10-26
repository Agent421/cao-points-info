def grades_perm(input_list):
    import itertools
    perms = list(itertools.product(input_list, repeat=6))

    all_combos = []

    def plus_25(grade):
        req = (46 == grade) or (56 == grade) or (66 == grade) or (77 == grade) or (88 == grade) or (100 == grade)
        if req == True:
            return True
        else:
            return False

    perms = list(map(list, perms))

    for i in range(len(perms)):
        if True in list(map(plus_25 , perms[i])) and sum(perms[i])+25 <= 625:
            output = [sorted(perms[i] + [25], reverse=True) , sum(perms[i]) + 25]
        else:
            output = [sorted(perms[i], reverse=True) , sum(perms[i]) ]
        #print(output)
        all_combos.append(output)

    file = open('_all_grades.txt', 'w')
    file.write(str(all_combos))
#grades_perm([0, 12, 20, 28, 37, 46, 56, 66, 77, 88, 100])