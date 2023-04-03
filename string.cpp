#include <iostream>
#include <string>
using namespace std;
int fun(string str)
{
    int len = str.size();
    return len;
}
string concat(string x, string y)
{
    return x+y;
}
string swap(string j, string k)
{
    char a = j[0];
    char b = k[0];
    j[0] = b;
    k[0] = a;
    return j + " " + k;
}
int main() {
    
	// Complete the program
 string a,b;
 cin>>a;
 cin>>b;
 cout<<fun(a)<<" "<<fun(b)<<endl;
 cout<<concat(a,b)<<endl;
 cout<<swap(a,b);  
    return 0;
}
