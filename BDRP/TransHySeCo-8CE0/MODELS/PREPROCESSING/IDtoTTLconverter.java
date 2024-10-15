import org.semanticweb.owlapi.apibinding.OWLManager;
import org.semanticweb.owlapi.model.OWLAxiom;
import org.semanticweb.owlapi.model.OWLDataFactory;
import org.semanticweb.owlapi.model.OWLOntology;
import org.semanticweb.owlapi.model.OWLOntologyManager;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class IDtoTTLconverter {
    public static String folder_path;  // folder with relation2id,entity2id,the file to convert
    public static String file_to_convert; //file to convert from triples with IDs to the TTL format


    public static void main(String[] args) throws Exception {
        //read parameters
        folder_path=args[0];
        file_to_convert=args[1];

        //read all the relations and entities of the KG
        Map<Integer, String> IDsRelations = new HashMap<>();
        Map<Integer, String> IDsEntities = new HashMap<>();
        String filePath = folder_path + "relation2id.txt";
        IDsRelations = Files.lines(Paths.get(filePath))
                .skip(1)
                .map(line -> line.split("\t"))
                .collect(Collectors.toMap(
                        parts -> Integer.parseInt(parts[1]),
                        parts -> parts[0]
                ));
        filePath = folder_path + "entity2id.txt";
        IDsEntities = Files.lines(Paths.get(filePath))
                .skip(1)
                .map(line -> line.split("\t"))
                .collect(Collectors.toMap(
                        parts -> Integer.parseInt(parts[1]),
                        parts -> parts[0]
                ));

        //read the triples of the file to convert from IDs version to TTL format
        filePath=folder_path+file_to_convert;
        List<Triple_Integer> listTriplesID=Files.lines(Paths.get(filePath))
                .skip(1)
                .map(line -> {
                    String[] parts = line.split(" ");
                    Integer subject = Integer.parseInt(parts[0]);
                    Integer object = Integer.parseInt(parts[1]);
                    Integer predicate = Integer.parseInt(parts[2]);
                    return new Triple_Integer(subject, predicate, object);
                })
                .collect(Collectors.toList());

        //convert triples
        List<Triple> listTriplesString=Convert(listTriplesID,IDsEntities,IDsRelations);

        //print converted triples into a file
        PrintConvertedTriplesInFile(listTriplesString);

    }

    /*
    FUNCTION to convert triples from IDs to ttl
    input 1: list of the triples written with the IDs
    input 2: map of the string of the entities with their IDs
    input 2: map of the string of the relations with their IDs
     */
    private static List<Triple> Convert(List<Triple_Integer> listTriplesID, Map<Integer,String> iDsEntities, Map<Integer,String> iDsRelations) {
        List<Triple> listTriplesString=new ArrayList<>();

        //convert each triple
        for(Triple_Integer t: listTriplesID){
            Triple converted_t=new Triple(iDsEntities.get(t.getSubject()),iDsRelations.get(t.getPredicate()),iDsEntities.get(t.getObject()));
            listTriplesString.add(converted_t);
        }

        return listTriplesString;
    }

    /*
    FUNCTION to print converted triples in a file
    input 1: list of the triples written in ttl
     */
    private static void PrintConvertedTriplesInFile(List<Triple> listTriplesString) throws IOException {
        String output_name="error.txt";

        //choose name of the output file
        if(Objects.equals(file_to_convert, "train2id.txt"))output_name="train.ttl";
        else if(Objects.equals(file_to_convert, "test2id.txt"))output_name="test.ttl";
        if(Objects.equals(file_to_convert, "valid2id.txt"))output_name="valid.ttl";

        //tools to write in the file
        File file = new File(folder_path+output_name);
        System.out.println("I deleted the file because it was already existing:"+file.delete());
        FileWriter writer = new FileWriter(folder_path+output_name);
        BufferedWriter bw = new BufferedWriter(writer);

        //write
        for(Triple t:listTriplesString){
            bw.write(t.getSubject()+" "+ t.getPredicate()+" "+t.getObject()+".");
            bw.newLine();
        }

        System.out.println("End of the conversion of "+listTriplesString.size()+" triples.");

        bw.close();
    }
}
