fhand = open("text.txt", "r")
for line in fhand:
    line = line.rstrip()
    if not "@" in line:
        continue
    print(line)
