package com.baloot.baloot.services.commodities;
import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.domain.Baloot.Commodity.Commodity;
import com.baloot.baloot.domain.Baloot.Exceptions.ForbiddenValueException;

import java.util.List;

public class FilterService {
    public static List<Commodity> filterBalootCommodities(String task, String value) throws Exception {
        switch (task) {
            case "sortByName":
                Baloot.getInstance().getCommoditiesSortedByName();
                return Baloot.getInstance().getFilteredCommodities();

            case "sortByPrice":
                Baloot.getInstance().getCommoditiesSortedByPrice();
                return Baloot.getInstance().getFilteredCommodities();

            case "searchByName":
                if(value.equals("")) // or maybe null ?!
                    throw new ForbiddenValueException();
                Baloot.getInstance().getCommoditiesFilteredByName(value);
                return Baloot.getInstance().getFilteredCommodities();

            case "searchByCategory":
                if(value.equals("")) // or maybe null ?!
                    throw new ForbiddenValueException();
                Baloot.getInstance().getCommoditiesFilteredByCategory(value);
                return Baloot.getInstance().getFilteredCommodities();
        }
        return null; //might also throw an exception!
    }
}
