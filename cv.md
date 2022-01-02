# Alexander Sitailo
### Contact information:
+ **Email:** asitailo2039@gmail.com;
+ **GitHub:** Anubic29.
* * *
### About me:
I’m 20 years old, I’m a second-year student of university at the Faculty of Programming. I’m interested in Web Development, so I want to try my hand at it.

I spend my free time learning Front End Development on free high quality self-study resources. When I found out about RSSchool I thought: "why not?". So I wanted to learn Front-End Development in RSSchool!

I hope my diligence and the courses will help me to obtain useful knowledge.
* * *
### Skills:
+	Html & CSS (Basic);
+	C++ (Basic), Java (Basic), C# (Basic);
+	Git & GitHub (Basic);
+	VS Code, IntelliJ IDEA.
* * *
### Code example:
Sorting - Two-way inserts (C#).
```
public static Elem[] Search(Elem[] mas)
{
  int k = mas.Length;
  Elem[] lmas = new Elem[2 * k];
  lmas[k - 1] = mas[0];
  int pos = k - 1;
  for (int i = 1; i < k; i++)
  {
    int j = 0;
    if (mas[i].key >= lmas[k - 1].key)
    {
      j++;
      while (lmas[k - 1 + j] != null && mas[i].key > lmas[k - 1 + j].key)
        j++;
    }
    else
    {
      j--;
      pos--;
      while (lmas[k - 1 + j] != null && mas[i].key < lmas[k - 1 + j].key)
        j--;
    }
    Change(ref lmas, k - 1, j, mas[i]);
  }
  for (int i = 0; i < k; i++)
    mas[i] = lmas[i + pos];
  return mas;
}
```
* * *
### Experience:
*Nothing yet…*
* * *
### Courses:
+	RS Schools Course «JavaScript/Front-end. Stage 0» **(in progress)**;
+	JavaScript Basic on the [Code-Basics](https://ru.code-basics.com/) **(in progress)**;
+	Html & CSS Basic on the [Code-Basics](https://ru.code-basics.com/) **(completed)**.
* * *
### English language:
B1 (I have some speaking practice, but not with native speakers).
