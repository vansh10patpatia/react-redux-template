import java.util.*;
import java.lang.*;
import java.io.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedWriter;

public class PracQues2 {

    static int a = 0, an=0,the=0,count=0,word=0,characters =0;

    public static void main(String[] args){
        try{
            File file1 = new File("file.txt");
            File file2 = new File("renamedFile.txt");
            FileReader file = new FileReader("file.txt");
            BufferedReader br = new BufferedReader(file);
            String line;
            while((line = br.readLine()) != null){
                String[] words = line.split(" ");
                for(int i=0;i<words.length;i++){
                    word++;
                    characters = characters + words[i].length();
                }
                count++;
            }
            System.out.println("Total words : " + word);
            System.out.println("Total characters : " + characters);
            System.out.println("Total lines : " + count);
            boolean flag = file1.renameTo(file2);
            if(flag)
                System.out.println("File renamed successfully");
            file.close();
            br.close();

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

