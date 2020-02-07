import xml.etree.ElementTree as ET

numbers = []
with open("input.txt", "r") as fin:
    for line in fin:
        numbers.append(line.strip().split(" "))
    print(numbers)

code = [num[0] for num in numbers]

tree = ET.parse('exporti.xml')
root = tree.getroot()

for i in range(len(root)):
    for child in root[i][3].findall('ИК'):
        if(child.findall("Код")[0].text not in code):
            root[i][3].remove(child)
        else:
            child.findall("ДатаПринятияКУчету")[0].text = "01.01." + numbers[code.index(child.findall("Код")[0].text)][1]
            child.findall("ДатаВводаВЭксплуатацию")[0].text = "01.01." + str(int(numbers[code.index(child.findall("Код")[0].text)][1]) + 1)
print(ET.dump(root))
ET.ElementTree(root).write("export_parsed.xml", encoding="windows-1251")
