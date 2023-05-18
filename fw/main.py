# from random import randint
 
# # Создание списка,
# # его сортировка по возрастанию
# # и вывод на экран
# a = []
# for i in range(10):
#     a.append(randint(1, 50))
# a.sort()
# print(a)
 
# # искомое число
# value = int(input())
 
# mid = len(a) // 2
# low = 0
# high = len(a) - 1
 
# while a[mid] != value and low <= high:
#     if value > a[mid]:
#         low = mid + 1
#     else:
#         high = mid - 1
#     mid = (low + high) // 2
 
# if low > high:
#     print("No value")
# else:
#     print("ID =", mid)

b = []
a = [{"key1": "value1"}, {"k1": "v1", "k2": "v2", "k3": "v3"}, {}, {}, {"key1": "value1"}, {"key1": "value1"}, {"key2": "value2"}]
for i in a:
    if (i not in b):
        b.append(i)

print(b)